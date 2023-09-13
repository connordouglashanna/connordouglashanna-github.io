// this component will hold the professional headshot, ripped from LinkedIn
import HeadShot from './imgs/headshot.jpg';
export default function Profile() {
    return (
          <img
            src={HeadShot}
            alt="Connor Headshot"
          />
    )
  }