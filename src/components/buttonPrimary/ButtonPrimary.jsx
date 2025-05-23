import './ButtonPrimary.css'

export default function ButtonPrimary({text, variant}) {
    return (
    <>
    <a href="mailto:jeudyjr@outlook.com">
      <button className="ButtonPrimary">
        <span class="ButtonPrimary__Edge"></span>
        <div class="ButtonPrimary__Front">
          <span>{text} </span>
        </div>
      </button>
    </a>    
    </>
  );
}

