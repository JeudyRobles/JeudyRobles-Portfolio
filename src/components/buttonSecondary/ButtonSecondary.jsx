import './ButtonSecondary.css'

export default function ButtonPrimary({text, variant}) {
    return (
      <>
        {/* From Uiverse.io by Gaurav-WebDev */}
        <button class="button type1">
        <span class="btn-txt">{text}</span>
        </button>
      </>
  );
}