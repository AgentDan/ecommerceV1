import ReactCardFlip from "react-card-flip"
import {useState} from "react"
import {useNavigate, Link} from "react-router-dom";
import Contacts from "../Contacts/Contacts";
import {Menu} from "../Menu/Menu";

const Chair = ({currentLang, menuOpened, setMenuOpened}) => {
    const [components, setComponents] = useState([
        {
            id: 0,
            price: "200",
            descriptionEN: "",
            descriptionRS: "",
            descriptionRU: "desctiption RU",
            path3D: 0,
            login3d: "lamp",
            pass3d: "demo",
            nameEN: "SHAIR",
            nameRS: "ПОЛИЦА",
            nameRU: "ПОЛКА",
            foto: "./fotos/lamp1foto.png",
            render: "./fotos/lamp1render.png",
            check: true
        },
        {
            id: 1,
            price: "250",
            descriptionEN: "",
            descriptionRS: "",
            descriptionRU: "desctiption RU",
            path3D: 1,
            login3d: "lampwood",
            pass3d: "demo",
            nameEN: "LAMP WOOD",
            nameRS: "ПОЛИЦА",
            nameRU: "ЛАМПА ИЗ БРУСА",
            foto: "./fotos/lamp1foto.png",
            render: "./fotos/lamp2render.png",
            check: true
        },
        {
            id: 2,
            nameEN: "LAMP",
            nameRS: "LAMP",
            nameRU: "СВЕТИЛЬНИК",
            foto: "",
            render: "./fotos/chairRender3.png",
            check: true
        },
        {
            id: 3,
            nameEN: "LAMP",
            nameRS: "LAMP",
            nameRU: "СВЕТИЛЬНИК",
            foto: "",
            render: "./fotos/chairRender2.png",
            check: true
        },
    ])

    const navigate = useNavigate()

    const clickFlipped = (id, check) => {
        setComponents(components.map(t => t.id === id ? {...t, check} : t))
    }
    const [open, setOpen] = useState(false)
    const [fullScreenImgPath, setFullScreenImgPath] = useState("")

    const onClickDesignPath = (designPath3D) => {
        navigate(`/designer`)
    }
    const onClickFullScreenImg = (pathFullScreenImg) => {
        setOpen(true)
        setFullScreenImgPath(pathFullScreenImg)
    }

    const comp =
        components.map((i, index) => {

            const onClickButton = () => {
                clickFlipped(i.id, !i.check)
            }

            return (
                <div key={i.id}>
                    {i.foto ?
                        <ReactCardFlip isFlipped={i.check} flipDirection={"horizontal"}>
                            <div className="card h-5/6 bg-white">
                                <div className="p-5 flex flex-col ">
                                    <div className="rounded-xl overflow-hidden xs:h-full">
                                        <img src={i.foto} alt=""
                                             className="h-auto w-auto "
                                             onClick={() => onClickFullScreenImg(i.foto)}
                                        />
                                    </div>
                                        <Link to={`/project/${i.path3D}`}
                                              // target="_blank"
                                              className="h-12 text-xl text-white pt-1 text-center cursor-pointer bg-blue-600 rounded-lg"
                                        >
                                            <span className="text-xs">3d designer : </span>
                                            <span className="text-xl">
                                                {currentLang === "en" ? i.nameEN : ""}
                                                {currentLang === "rs" ? i.nameRS : ""}
                                                {currentLang === "ru" ? i.nameRU : ""}
                                            </span>
                                        </Link>
                                        <a
                                            onClick={onClickButton}
                                            className="bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer h-12 text-center text-white py-2 rounded-lg text-xl font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all"
                                        >
                                            {currentLang === "en" ? i.nameEN : ""}
                                            {currentLang === "rs" ? i.nameRS : ""}
                                            {currentLang === "ru" ? i.nameRU : ""}
                                        </a>
                                </div>
                            </div>
                            <div className="card h-5/6 bg-white">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden xs:h-full">
                                        <img src={i.render}
                                             alt=""
                                             className="h-auto w-auto "
                                             onClick={() => onClickFullScreenImg(i.render)}
                                        />
                                    </div>
                                    <div
                                        className="h-12 text-3xl font-bold pt-1 text-center rounded-lg">
                                        {i.price} {'\u20AC'}
                                    </div>
                                    <a
                                        onClick={onClickButton}
                                        className="bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer h-auto text-center text-white py-2 rounded-lg text-xl font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all"
                                    >
                                        {currentLang === "en" ? i.nameEN : ""}
                                        {currentLang === "rs" ? i.nameRS : ""}
                                        {currentLang === "ru" ? i.nameRU : ""}
                                    </a>
                                </div>
                            </div>
                        </ReactCardFlip>
                        :
                        <div className="card h-5/6 bg-white">
                        <div className="p-5 flex flex-col">
                        <div className="rounded-xl overflow-hidden xs:h-full">
                        <img src={i.render}
                     alt=""
                     className="h-auto w-auto "
                     onClick={() => onClickFullScreenImg(i.render)}
                />
        </div>
            <div className="h-12 text-center text-3xl font-bold">{i.price} {'\u20AC'}</div>
            <div className="h-12 text-xs">{i.descriptionRU}</div>
            <a
                onClick={onClickButton}
                className="h-auto text-center bg-gray-100 py-2 rounded-lg font-semibold mt-4 transition-all text-xl "
            >
                {currentLang === "en" ? i.nameEN : ""}
                {currentLang === "rs" ? i.nameRS : ""}
                {currentLang === "ru" ? i.nameRU : ""}
            </a>
        </div>
        </div>
        }
        </div>
        )

        })

        return (
            <>
                <div className="flex items-center justify-center mx-auto h-auto w-screen bg-yellow-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-28 m-16">

                        {comp}

                        <div
                            onClick={() => setOpen(false)}
                            className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/50" : "invisible"} `}
                        >
                            <img src={fullScreenImgPath} alt="" className="h-full w-auto"/>
                        </div>
                    </div>
                </div>
                <Contacts/>
                <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} currentLang={currentLang}/>
            </>
        )
        }
        export default Chair