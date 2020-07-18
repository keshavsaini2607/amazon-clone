import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className="home">
            <a href="https://www.amazon.in/dp/B07X4PKGSN?pf_rd_r=9TE7MJ52AYAKETHP2YQF&pf_rd_p=736e0baa-5450-4f7e-9114-0a15a1430c9d">
                <img 
                className="home__image"
                src="https://www.amazon.in/images/G/31/img20/Wireless/Xiaomi/Redmi_Note8Pro/6_128/V175571246_IN_WLME_Redmi_Note8_pro_Gaming_DesktopTallHero_1500x600._CB428014041_.jpg" 
                alt="" />
            </a>

            <div className="home__row">
                <Product
                id="12321241"
                title="Ikigai: The Japanese secret to a long and happy life Hardcover – 27 September"
                price={395}
                rating={4}
                image="https://www.amazon.in/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"
                />

                <Product
                id="12321242"
                title="JBL Go PLUS Portable Bluetooth Speaker  (Black, Mono Channel)#JustHere"
                price={1100}
                rating={1}
                image="https://rukminim1.flixcart.com/image/352/352/k6fd47k0pkrrdj/speaker/mobile-tablet-speaker/m/h/z/jbl-jblgoplusblkeu-original-imafdzu6tsnfnstp.jpeg?q=70"
                />
            </div>

            <div className="home__row">
                <Product
                id="12321243"
                title="Apple iPhone 11 (Black, 64 GB)"
                price={69500}
                rating={2}
                image="https://rukminim1.flixcart.com/image/352/352/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70"
                />

                <Product
                id="12321244"
                title="Apple iPhone 7 (Black, 32 GB)"
                price={29499}
                rating={5}
                image="https://rukminim1.flixcart.com/image/352/352/k12go7k0/mobile/7/e/e/apple-iphone-7-mn8x2hn-a-original-imafkqcqhzxuvcpd.jpeg?q=70"
                />

                <Product
                id="12321245"
                title="Apple iPhone X (Silver, 256 GB)"
                price={76990}
                rating={4}
                image="https://rukminim1.flixcart.com/image/352/352/j9d3bm80/mobile/g/x/j/apple-iphone-x-mqa62hn-a-original-imaeyzyfdzhfckef.jpeg?q=70"
                />
            </div>

            <div className="home__row">
                <Product
                id="12321246"
                title="MSI 27 inch Curved Full HD VA Panel Gaming Monitor (Optix MAG271CR)"
                price={26999}
                rating={3}
                image="https://rukminim1.flixcart.com/image/352/352/k59xci80/monitor/a/g/z/optix-mag271cr-with-rgb-led-1920x1080-144-hz-refresh-rate-1-ms-original-imafn99tzt6zqgr7.jpeg?q=70"
                />
            </div>
            
        </div>
    )
}

export default Home
