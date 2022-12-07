import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"KISS FM - R'n'B",
            artist: "KISSFM-R'n'B",
            cover: "https://img.freepik.com/vector-gratis/ilustracion-realista-auriculares-inalambricos_1284-20763.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://topradio-de-hz-fal-stream05-cluster01.radiohost.de/kissfm-rnb_mp3-128",
            active: true,
        },
        {
            name:"Radio Regenbogen - Hip-Hop & R'n'B",
            artist: "RadioRegenbogen-Hip-Hop&R'n'B",
            cover: "https://img.freepik.com/vector-gratis/ilustracion-realista-auriculares-inalambricos_1284-20763.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://stream.regenbogen.de/hiphop/mp3-128/onlineradiobox",
            active: false,
        },
        {
            name:"Radio Hip-Hop",
            artist: "RadioHipHop",
            cover: "https://img.freepik.com/vector-gratis/ilustracion-realista-auriculares-inalambricos_1284-20763.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://hiphop.stream.laut.fm/hiphop",
            active: false,
        },
        {
            name:"HIP-HOP-FM",
            artist: "HIP-HOP-FM",
            cover: "https://img.freepik.com/vector-gratis/ilustracion-realista-auriculares-inalambricos_1284-20763.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://hip-hop-fm.stream.laut.fm/hip-hop-fm",
            active: false,
        },
        {
            name:"BigFM Hip-Hop",
            artist: "bigFMHip-Hop",
            cover: "https://img.freepik.com/vector-gratis/ilustracion-realista-auriculares-inalambricos_1284-20763.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://stream.bigfm.de/hiphop/mp3-128/onlineradiobox",
            active: false,
        },
        {
            name:"Kings of Hip Hop",
            artist: "KingsofHipHop",
            cover: "https://img.freepik.com/vector-gratis/ilustracion-realista-auriculares-inalambricos_1284-20763.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://kingsofhiphop.stream.laut.fm/kingsofhiphop",
            active: false,
        },
        {
            name:"Finest Hip-Hop Radio",
            artist: "FinestHipHopRadio",
            cover: "https://img.freepik.com/vector-gratis/ilustracion-realista-auriculares-inalambricos_1284-20763.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://finesthiphopradio.stream.laut.fm/finesthiphopradio",
            active: false,
        },
        {
            name:"Delta radio HIP HOP",
            artist: "DeltaradioHIPHOP",
            cover: "https://img.freepik.com/vector-gratis/ilustracion-realista-auriculares-inalambricos_1284-20763.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://streams.deltaradio.de/hiphop/mp3-128/onlineradiobox/",
            active: false,
        },
        {
            name:"2000 FM - R & B Hip-Hop",
            artist: "2000FM-R&BHip-Hop",
            cover: "https://img.freepik.com/vector-gratis/ilustracion-realista-auriculares-inalambricos_1284-20763.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://ais-edge50-live365-dal02.cdnstream.com/a48930",
            active: false,
        },
    ];
}

export default chillHop;


