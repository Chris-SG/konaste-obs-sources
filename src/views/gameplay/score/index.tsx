import {useEffect, useState} from "react";

const Score = () => {
    const konasteHost = localStorage.getItem('api-host')!;
    const [konasteApi, setKonasteApi] = useState<WebSocket>();
    const [score, setScore] = useState(0);

    useEffect(() => {
        openKonasteApiConnection();
    }, []);

    const openKonasteApiConnection = () => {
        console.log('Opening konaste-api WebSocket');
        const konasteWebsocket = new WebSocket(`ws://${konasteHost}:4573/ws/gameplay/score`);
        konasteWebsocket.addEventListener("message", messageEventListener);

        setKonasteApi(konasteWebsocket);
    }

    const messageEventListener = async (event: MessageEvent<number>) => {
        setScore(event.data);
    }

    const GetGrade = (score: number) => {
        if (score < 7000000) return 'D';
        if (score < 8000000) return 'C';
        if (score < 8700000) return 'B';
        if (score < 9000000) return 'A';
        if (score < 9300000) return 'A+';
        if (score < 9500000) return 'AA';
        if (score < 9700000) return 'AA+';
        if (score < 9800000) return 'AAA';
        if (score < 9900000) return 'AAA+';
        return 'S';
    }

    if (konasteApi === undefined) {
        return <></>;
    }

    return <>
        <div id="score" className={GetGrade(score)}>{score}</div>
        <div id="ex" className={GetGrade(score)}>{score}</div>
    </>;
}

export default Score;