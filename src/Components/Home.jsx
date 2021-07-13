import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

export default function Home() {
    return (
        <div>
            <div  id="carouselExampleControls" className="carousel slide  " data-ride="carousel">
                <div className="carousel-inner ">
                    <div className="  carousel-item active ">
                    <img  src="https://cdn.pixabay.com/photo/2017/08/24/16/18/enfield-2677410_960_720.jpg" className=" d-block w-100  " alt="..."/>
                    </div>
                    <div className="  carousel-item ">
                    <img  src="https://cdn.pixabay.com/photo/2017/05/30/13/39/enfield-2356996_960_720.jpg" className="  d-block w-100 " alt="..."/>
                    </div>
                    <div className=" carousel-item ">
                    <img  src="https://cdn.pixabay.com/photo/2017/07/12/16/22/moterbike-2497445_960_720.jpg" className=" d-block w-100 " alt="..."/>
                    </div>
                </div>
                <Link className="carousel-control-prev" to="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </Link>
                <Link className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </Link>
            </div>
            <div className="container">
                <p>Royal Enfield bike price starts from Rs. 1,33,067. Royal Enfield offers 6 new models in India with most popular bikes being Classic 350, Meteor 350 and Bullet 350. The upcoming bike of Royal Enfield includes 2021 Classic 350. Most expensive Royal Enfield bike is Continental GT 650, which is priced at Rs. 2,90,481.</p>
                <p>Royal Enfield is one of the oldest surviving motorcycle manufacturers in the world. Established in 1901, the iconic British manufacturer started off by manufacturing motorcycles, bicycles, lawnmowers, stationary engines and more popularly, weapons. To this day, Royal Enfield continues to use the motto ‘Made like a gun’, in memory of its legacy. Royal Enfield bikes are known for the class they exude as much as for their signature thump. Royal Enfield was acquired by Eicher Motors in 1994, which proved to be a pivotal role in the resurgence of the manufacturer. Although the company continues to make classic-styled and old-school motorcycles which are essentially modernised versions of the early Bullet models from the 1950s, the fortunes of Royal Enfield have turned and it is one of the fastest growing bike makers in the country. However, while the Classic set the company on a path of unprecedented growth, a few Royal Enfield models like the now-discontinued single-cylinder Continental GT had to make do with a muted response. The Royal Enfield in India, was unchallenged, until the foray of International brands like Triumph and Indian Chief. Making the most of its image as a lifestyle motorcycle manufacturer, Royal Enfield has so far managed to hold its turf despite a line-up in which some models are outdated. Having established its foothold in the Indian market, Royal Enfield is now aiming at widening its footprint at a global level. Of late, the company has been making its presence felt on a global scale by setting up exclusive dealerships in Europe, Gulf and the US. The Royal Enfield portfolio currently comprises of the Bullet, Classic, Thunderbird, Himalayan, Interceptor 650 and Continental GT 650. Of these, the Bullet, Classic and Thunderbird are available in two versions powered by 350cc and 500cc engines. While all the models have stayed true to the company’s traditional character, a few specific models do get their share of modern tech in the form of fuel injection, projector headlamp and digital instrument cluster. ABS and a rear disc brake have recently been added to this list for the entire range. Things are expected to get a lot more exciting for the brand presently, with the launch of its first twin-cylinder motorcycles, the Interceptor 650 and Continental GT 650. These are twin-cylinder 650cc motorcycles that promise to bring in a new chapter for the brand not just in India,</p>
            </div>
        </div>
    )
}
