import { useState } from "react"
import { Button, ButtonProps, Fieldset, Radio } from "../../src"
import { size } from "../../src/types"

export default function ButtonBuilder() {
    const [buttonProsp, setButtonProsp] = useState({} as ButtonProps)
    const update = () => {
        // "small" | "medium" | "large" | "extra"
        console.log("klik")
        const form = document.querySelector("form")!;
        const data = new FormData(form);
        let output = "";
        for (const entry of data) {
            output = `${entry[1]}`;
            console.log(output)
            setButtonProsp({
                // ...buttonProsp,
                size: output as size,
            })
        }
    }
    return <main className="responsive">
        <div className="grid">

            <form>
                <Fieldset legend="size" onChange={update} id="size" className="s6">
                    <Radio name="size" value={"small"}>small</Radio>
                    <Radio name="size" value={"medium"} defaultChecked={true}>medium</Radio>
                    <Radio name="size" value={"large"}>large</Radio>
                    <Radio name="size" value={"extra"}>extra</Radio>
                </Fieldset>
                {/* "border" | "circle" | "square" | "round" 
                <Fieldset legend="shape" onChange={update} id="shape" className="s6">
                    <Radio name="shape" value={"small"}>small</Radio>
                    <Radio name="shape" value={"medium"} defaultChecked={true}>medium</Radio>
                    <Radio name="shape" value={"large"}>large</Radio>
                    <Radio name="shape" value={"extra"}>extra</Radio>
                </Fieldset> */}
            </form>
        </div>
        <div style={{
            margin: "2rem",
            textAlign: "center"
        }}>
            <Button {...buttonProsp}>
                My Button
            </Button>
        </div>
    </main>
}