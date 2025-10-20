import MenuTable from "../components/MenuTable.jsx";
import '../styles/Menu.css';

import DwarvenAlePie from "../assets/DwarvenAlePie.png";
import ElvenLembasBread from "../assets/ElvenLembasBread.png";
import GondorianLambChops from "../assets/GondorianLambChops.png";
import HobbitonBeefStew from "../assets/HobbitonBeefStew.png";
import SeaBassOfNumenor from "../assets/SeaBassOfNumenor.png";


const items = [
    { img: DwarvenAlePie,       name: "Dwarven Ale Pie",      desc: "This is garunteed to taste delicious and get you drunk in one go", price: 14 },
    { img: ElvenLembasBread,    name: "Elven Lembas Bread",   desc: "It is said that one bite can fill the belly of a full grown man for 3 days",   price: 8  },
    { img: GondorianLambChops,  name: "Gondorian Lamb Chops", desc: "From the highlands of gondorian farmers, these lamb chops will make you cry",               price: 22 },
    { img: HobbitonBeefStew,    name: "Hobbiton Beef Stew",   desc: "Po-ta-toes! Boil em, mash em, stick em in a stew.",      price: 16 },
    { img: SeaBassOfNumenor,    name: "Sea Bass of Númenor",  desc: "Fished from the seas surrounding the sunken city, these fish are said to give the customer a feeling of longing for a lost land",              price: 19 },
];

export default function Menu() {
    return (
        <div>
            <h1 className={"tableTitle p-5 align-items-center text-center justify-content-center"}>The Lord of the Rings Feast</h1>
            <MenuTable items={items} />
        </div>

    );
}