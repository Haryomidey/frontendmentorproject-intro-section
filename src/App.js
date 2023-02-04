import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

// Images imports
import Logo from './images/logo.svg';
import ArrowDown from './images/icon-arrow-down.svg';
import ArrowUp from './images/icon-arrow-up.svg';
import Todo from './images/icon-todo.svg';
import Calendar from './images/icon-calendar.svg';
import Reminder from './images/icon-reminders.svg';
import Planning from './images/icon-planning.svg';
import ClientAudioPhile from './images/client-audiophile.svg';
import ClientDataBiz from './images/client-databiz.svg';
import ClientMaker from './images/client-maker.svg';
import ClientMeet from './images/client-meet.svg';
import CloseMenu from './images/icon-close-menu.svg';
import IconMenu from './images/icon-menu.svg';

function App() {
  return (
    <div className="App">
      <Navbar Logo={Logo} ArrowDown={ArrowDown} ArrowUp={ArrowUp} Todo={Todo} Calendar={Calendar} Reminder={Reminder} Planning={Planning} CloseMenu={CloseMenu} IconMenu = {IconMenu} />
      <HeroSection ClientDataBiz={ClientDataBiz} ClientAudioPhile={ClientAudioPhile} ClientMeet={ClientMeet} ClientMaker={ClientMaker} />
    </div>
  );
}

export default App;
