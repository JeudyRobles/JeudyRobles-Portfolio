import './ButtonSecondary.css'
import ShareIcon from '../icons/Share.jsx';
export default function ButtonPrimary({text, variant}) {
    return (
      <>
        {/* From Uiverse.io by Gaurav-WebDev */}
        <button className="button type1">
          <span className="btn-txt">{text}</span>
          <ShareIcon/>
        </button>
      </>
  );
}