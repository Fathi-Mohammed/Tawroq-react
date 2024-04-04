import className from "classnames";
import "./Button.scss";

function Button({
  children,
  headerLink,
  langBtn,
  loginButton,
  warning,
  danger,
  outline,
  rounded,
  loading,
  ...rest
}) {
  const classes = className(
    rest.className,
    'button__',
    {
      "headerLink": headerLink,
      "langBtn": langBtn,
      "login_button": loginButton,

    }
  );

  return (
    <button {...rest} disabled={loading} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ headerLink, secondary, success, warning, danger }) => {
    const count =
      Number(!!headerLink) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
