export default async function handler(req, res) {

    if(req.method !== "POST"){
        return res.status(405).json({
            success:false
        });
    }

    const { key } = req.body;

    /* TES CLES PRIVEES */

    const validKeys = [

        "Talibrozeur.1664",
        "Asalamu56.qlf",
        "ElDoxDelSuixide67uwu.x6",
        "OhMonBouz3Louf7.a6.99",
        "JUzv815(jsizb5347d.hUr64x",
        "LarpLarp4meow.81;aiUq",
        "qlf.x81961946.wxzc.715",
        "mdr.x72542822.osgd.915",
        "lol.x85295201.bsgu.528",
        "wsh.x81569148.kacd.725",
        "wsp.x12942929.oaks.815",
        "stp.x51784282.lavd.915",
        "jsp.x12671451.habs.628",
        "uhq.x26218361.iagd.171",
        "8161917638326h916286bsb6",
        "0x81518bskqt71827bqyay66"
     
    ];

    /* VERIFICATION */

    if(validKeys.includes(key)){

        return res.status(200).json({
            success:true
        });

    }else{

        return res.status(401).json({
            success:false
        });

    }

}