import "./header.css";

const Header = ({money, total}) => {
  return (
    <div className="header">
      Harcamak için <span className="money"> ${money - total} </span> paranız var!
      </div>
  )
}

export default Header;