import './ButtonPrimary.css'

export default function ButtonPrimary({text, variant}) {
    return (
    <>
    <a href="mailto:jeudyjr@outlook.com" rel="noopener noreferrer">
      <button className="ButtonPrimary">
        <span className="ButtonPrimary__Edge"></span>
        <div className="ButtonPrimary__Front">
          <span>{text} </span>
        </div>
      </button>
    </a>    
    </>
  );
}

