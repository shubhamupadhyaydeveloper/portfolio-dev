import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import CanvasLoader from "./ModelLoader";
// import ScrollReveal from "./components/ScrollReveal";


function ReactModel() {
  // const reactModel = useGLTF("./reactscene.gltf");
  const modelRef = useRef<any>(null);

  const model = useGLTF("./dog.glb");
  useFrame(() => {
    modelRef.current.rotation.y += 0.01;
  });
  return (
    <>
      <mesh ref={modelRef}>
        {/* Soft & even — no dark "shadowed" side, subtle 3D form kept.
            ambientLight = flat fill from everywhere; the two low opposing directionals
            fill each other's dark sides so no face goes fully dark.
            Flatter / less shadow: raise ambient (e.g. 1.6) and/or lower the directionals.
            More form: raise one directional's intensity. */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.45} />
        <directionalLight position={[-5, 3, -5]} intensity={0.45} />
        <primitive
          object={model.scene}
          scale={0.45}
          position={[0, -0.4, 0]}      
          rotation={[0, 1.1, 0]}
        />
      </mesh>
      {/* <Html wrapperClass="dog">Hi, I am dog 👍</Html> */}

    </>
  );
}

const Model = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 500px)");
  //   setIsMobile(mediaQuery.matches);

  //   const handleMediaQueryChange = (event: any) => {
  //     setIsMobile(event.matches);
  //   };

  //   mediaQuery.addEventListener("change", handleMediaQueryChange);
  //   return () => {
  //     mediaQuery.removeEventListener("change", handleMediaQueryChange);
  //   };
  // }, []);

  return (
    <div
      data-scroll-section
      className="
        mt-[15vh]
        md:mt-[10vh]
        w-full 
        h-[250px] sm:h-[350px] 
        md:w-[50vw]
      "
    >
      <Canvas
        frameloop="always"
        flat
        dpr={[1, 2]}
        camera={{ position: [4, 2, 5], fov: 35 }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
        className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={true} />
          <ReactModel />
        </Suspense>
      </Canvas>
    </div>

  );
};

export default Model;