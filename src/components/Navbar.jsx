function Navbar({ Logo, ArrowDown, ArrowUp, Todo, Calendar, Reminder, Planning, CloseMenu, IconMenu }) {
    const featureHoverShow = () => {
        document.querySelector('.feature-hover').classList.toggle('active');
        let arrowDirectionUp = document.querySelector('.feature-up');
        let arrowDirectionDown = document.querySelector('.feature-down');

        if (arrowDirectionDown.classList.contains('active')) {
            arrowDirectionDown.classList.remove('active')
            arrowDirectionUp.classList.remove('active')
        }
        else {
            arrowDirectionDown.classList.add('active');
            arrowDirectionUp.classList.add('active')
            
        }
    }
    const companyHoverShow = () => {
        document.querySelector('.company-hover').classList.toggle('active');
        let arrowDirectionUp = document.querySelector('.company-up');
        let arrowDirectionDown = document.querySelector('.company-down');

        if (arrowDirectionDown.classList.contains('active')) {
            arrowDirectionDown.classList.remove('active')
            arrowDirectionUp.classList.remove('active')
        }
        else {
            arrowDirectionDown.classList.add('active');
            arrowDirectionUp.classList.add('active')
            
        }
    }

    const toggleBtn = () => {
        let navOpen = document.querySelector('.menu-open');

        let navClose = document.querySelector('.menu-close');

        document.querySelector('.nav').classList.toggle('active');
        document.querySelector('.nav-wrapper').classList.toggle('active');

        if (!navClose.classList.contains('active')) {
           navClose.classList.add('active');
           navOpen.classList.add('active');
        }
        else {
            navClose.classList.remove('active');
            navOpen.classList.remove('active');
        }
    }

  return (
    <header className='header'>
        <h1 className='logo'>
            <img src={Logo} />
        </h1>
        <div className="nav-wrapper">
            <nav className='nav'>
                <ul>
                    <li className='feature'>
                        <div className="flex">
                            <p onClick={featureHoverShow} className="list">Features</p>
                            <div className='arrow-div'>
                                <img src={ArrowDown} className = "arrow feature-down" />
                                <img src={ArrowUp} className = "arrow feature-up" />
                            </div>
                        </div>
                        <div className='feature-hover'>
                            <p><img src={Todo} /><span>Todo List</span></p>
                            <p><img src={Calendar} /><span>Calendar</span></p>
                            <p><img src={Reminder} /><span>Reminders</span></p>
                            <p><img src={Planning} /><span>Planning</span></p>
                        </div>
                    </li>
                    <li className='company'>
                        <div className="flex">
                            <p onClick={companyHoverShow} className="list">Company</p>
                            <div className='arrow-div'>
                                <img src={ArrowDown} className = "arrow company-down" />
                                <img src={ArrowUp} className = "arrow company-up" />
                            </div>
                        </div>
                        <div className='company-hover'>
                            <p>History</p>
                            <p>Our Team</p>
                            <p>Blog</p>
                        </div>
                    </li>
                    <li className="list">Careers</li>
                    <li className="list">About</li>
                </ul>
                <div className='registration'>
                    <button type='button' className='login-btn'>Login</button>
                    <button type='button' className='register-btn'>Register</button>
                </div>
            </nav>
        </div>
        <div className="menu-open-close" onClick={toggleBtn}>
              <img src={CloseMenu} className="menu menu-close"/>
            <img src={IconMenu}  className="menu menu-open"/>
        </div>
    </header>
  )
}

export default Navbar