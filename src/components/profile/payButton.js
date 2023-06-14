import "./profile.css"
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function PayButton({ total }) {
  return (
<div className="paypal-btn">
<PayPalScriptProvider
      options={{
        "client-id":
          "AQiq9pIfogUDNKd0PvaK_aBmFbEGUxWHumBPSb-uPaQqrSCsaGwG_ti_Xma8GFC1b38TlTBIXbxa6ynL",
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(function (details) {
            alert("Transaction completed by " + details.payer.name.given_name);
          });
        }}
      />
    </PayPalScriptProvider>
</div>
  );
}
