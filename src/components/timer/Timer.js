import React from "react";

// import "./style.css";
import {useEffect, useState} from "react";
import {interval, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

// type Status = "run" | "stop" | "wait";


export function Timer() {

    const [sec, setSec] = useState(0);
    const [status, setStatus] = useState("stop");

    useEffect(() => {
        const unsubscribe$ = new Subject();
        interval(100)
            .pipe(takeUntil(unsubscribe$))
            .subscribe(() => {
                if (status === "run") {
                    setSec(val => val + 1000);
                }
            });
        return () => {
            unsubscribe$.next();
            unsubscribe$.complete();
        };
    }, [status]);

    const start = React.useCallback(() => {
        setStatus("run");
    }, []);

    const stop = React.useCallback(() => {
        setStatus("stop");
        setSec(0);
    }, []);

    const reset = React.useCallback(() => {
        setSec(0);
    }, []);


    // const wait = React.useCallback(() => {
    //     setStatus("wait")
    //
    // }, []);

    let [wasClicked, setWasClicked] = useState(true);

    const wait = (() => {
        // const click =
        //     fromEvent(event.target, 'click');
        // const doubleClick = click.pipe(
        //     throttleTime(300)
        // );
        // doubleClick.subscribe(() => {
// let timer;

        if (wasClicked) {
            setWasClicked(false)

            setTimeout(()=> {setWasClicked(true)}, 300)
        }
        if (!wasClicked) {
                setStatus("wait");
                setWasClicked(true)
                console.log('hhh')
        }
    });




    return (
        <div>

            <span> {new Date(sec).toISOString().slice(11, 19)}</span>
            <button className="start-button" onClick={start}>
                Start
            </button>
            <button className="stop-button" onClick={stop}>
                Stop
            </button>
            <button onClick={reset}>Reset</button>
            <button id={'btnWait'} onClick={wait}>Wait</button>

        </div>
    );
}
