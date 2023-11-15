import React, { useEffect,useState } from 'react'

function Theme() {
    const [theme, setTheme] = useState("");

    const mode = ()=>{
        theme === "dark-theme" ? setTheme("light-theme"):setTheme("dark-theme")
    }

    useEffect(() => {
        document.body.className=theme
    }, [theme])
return (
    <>
    <div className='font'>
    <div className='btn'>
        {
            theme === "dark-theme"?
            <button onClick={mode}>Enable Light Theme</button>
            :
            <button onClick={mode}>Enable Dark Theme</button>
        }
    </div>
    <div className="heading">
        <h1>bookfolio</h1>
    </div>
    <div className="heading-detail">
        <h3>
            <p>
              Motivational Novals Can Change Your Mind .
            </p>
        </h3>
    </div>
    <div className="books-flex">
        <div className="img">
            <img src="./Images/noval 1.png" alt="" />
        </div>
        <div className="img">
            <img src="./Images/noval 2.webp" alt="" />
        </div>
        <div className="img">
            <img src="./Images/noval 3.jpg" alt="" />
        </div>
    </div>
    </div>
    </>
)
}

export default Theme