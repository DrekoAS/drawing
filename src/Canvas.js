import React from "react";
import CanvasDraw from "react-canvas-draw";

export const CanvasBlock = () => {
    const [canvas, setCanvas] = React.useState(null);

    console.log(canvas)
    console.log(localStorage)
    return (
        <div>
            <CanvasDraw
                ref={canvasDraw => (setCanvas(canvasDraw))}
                enablePanAndZoom
                canvasWidth={window.innerWidth - 100}
                canvasHeight={window.innerHeight - 100}
                saveData={localStorage.getItem("savedDrawing")}
            />

            <button
                onClick={() => {
                    localStorage.setItem(
                        "savedDrawing",
                        canvas.getSaveData()
                    );
                }}
            >
                Save
            </button>

            <button
                onClick={() => {
                    canvas.clear();
                    setCanvas(localStorage.getItem(
                        "savedDrawing"
                    ));
                }}
            >
                Load
            </button>
        </div>
    )
};