import './Button.css'

export default function Button({text, variant}) {
    return (
    <>
    <a href="mailto:jeudyjr@outlook.com">
      <button className={`Button button--${variant}`} class="Button">
        <span class="Button__Shadow"></span>
        <span class="Button__Edge"></span>
        <div class="Button__Front">
          <span>{text} </span>
        </div>
      </button>
    </a>    
    </>
  );
}

