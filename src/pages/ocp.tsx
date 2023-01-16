import { main as classNonOCP } from "../patterns/1-solid/2-ocp/2-class/example-1-non-ocp";
import { main as classUseOCP } from "../patterns/1-solid/2-ocp/2-class/example-1-use-ocp";

function component() {
  function classExample() {
    console.log("Class Example");
    console.log("First Class Example");
    console.log("non-ocp");
    classNonOCP();
    console.log("use-ocp");
    classUseOCP();
    console.log("End Class Example");
    console.log("");
    console.log("");
  }

  classExample();

  return <>LOOK CONSOLE</>;
}

export default component;
