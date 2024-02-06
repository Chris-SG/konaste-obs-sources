import {useEffect, useState} from "react";

interface Stats {
    chartMaxEx: number,
    chartMaxCombo: number,
    maxCombo: number,
    score: number,
    ex: number,
    missedEx: number,
    combo: number,
    timestamp: number
}

const Score = () => {
    const konasteHost = localStorage.getItem('api-host')!;
    const [konasteApi, setKonasteApi] = useState<WebSocket>();
    const [stats, setStats] = useState<Stats | undefined>(undefined);

    const messageEventListener = async (event: MessageEvent<string>) => {
        console.log(event.data);
        if (event.data === "null") {
            setStats(undefined)
            return;
        }
        setStats(JSON.parse(event.data));
    }

    useEffect(() => {
        openKonasteApiConnection();
    }, []);

    useEffect(() => {
        if (konasteApi === undefined) return;
        konasteApi.addEventListener("message", messageEventListener);
        return () =>
            konasteApi.removeEventListener("message", messageEventListener);
    }, [konasteApi]);

    const openKonasteApiConnection = () => {
        console.log('Opening konaste-api WebSocket');
        const konasteWebsocket = new WebSocket(`ws://${konasteHost}:4573/ws/game/nowplaying/stats?rate=100`);

        setKonasteApi(konasteWebsocket);
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

    if (konasteApi === undefined || stats === undefined) {
        return <></>;
    }

    return <>
        <div id="score" className={GetGrade(stats.score)}>{stats.score}</div>
        <div id="ex" className={GetGrade(stats.score)}>{stats.score}</div>
        {
            stats.ex === 0 && stats.missedEx === 0 ?
                <div id="rate">100.00</div> :
                <div id="rate">{((stats.ex * 100) / (stats.ex + stats.missedEx)).toFixed(2)}</div>
        }
    </>;
}

export default Score;