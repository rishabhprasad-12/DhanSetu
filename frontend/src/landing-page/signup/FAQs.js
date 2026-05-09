import React from "react";

export default function FAQs() {
  const contents = [
    {
      ques: "What is a DhanSetu account",
      ans: {
        type: "text",
        value:
          "A DhanSetu account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.",
      },
    },
    {
      ques: "What documents are required to open a demat account?",
      ans: {
        type: "list",
        intro:
          "The following documents are required to open a DhanSetu account online:",
        points: [
          "PAN number",
          "Aadhaar Card (Linked with a phone number for OTP verification)",
          "Cancelled cheque or bank account statement (To link your bank account)",
          "Income proof (Required only if you wish to trade in Futures & options)",
        ],
      },
    },
    {
      ques: "Is DhanSetu account opening free?",
      ans: {
        type: "text",
        value: "Yes, It is completely free.",
      },
    },
    {
      ques: "Are there any maintenance charges for a demat account?",
      ans: {
        type: "text",
        value:
          "The account maintenance charges is applicable based on the account type. For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000. For non-Basic Services Demat Account demat accounts: ₹300 per year + GST. To learn more about BSDA, Click here.",
      },
    },
    {
      ques: "Can I open a demat account without a bank account?",
      ans: {
        type: "text",
        value:
          "To open a demat account, you must have a bank account in your name. If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to DhanSetu.",
      },
    },
    {
      ques: "What is a Basic Services Demat Account (BSDA)?",
      ans: {
        type: "text",
        value:
          "BSDA is a demat account designed for retail investors with smaller holdings. It automatically applies if you have only one demat account per PAN and holdings of up to ₹10 lakhs in it. You will not be charged any Account Maintenance Charge (AMC) for holdings up to ₹4 lakhs value, and only ₹25/quarter if holdings are between ₹4 lakhs and ₹10 lakhs.",
      },
    },
    {
      ques: "Can I open a demat and trading account using the mobile app?",
      ans: {
        type: "text",
        value:
          "Yes, You can open a demat and trading account completely online using the DhanSetu Kite mobile app, available on Android and iOS. ",
      },
    },
  ];

  return (
    <div className="container mt-5">
      <h3 className="fs-2 fw-semibold" style={{ marginTop: "5em" }}>
        FAQs
      </h3>
      <div className="mb-5">
        <FQsComponents contents={contents} />
      </div>
    </div>
  );
}

const FQsComponents = ({ contents }) => {
  return (
    <div className="mt-5">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        {contents.map((content, index) => (
          <div class="accordion-item mb-4 border rounded p-2" key={index}>
            <h2 class="accordion-header">
              <button
                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                style={{ padding: "0.5em" }}
              >
                {content.ques}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              data-bs-parent="#supportAccordion"
            >
              <div class="accordion-body text-muted">
                {content.ans.type === "text" && <p>{content.ans.value}</p>}

                {content.ans.type === "list" && (
                  <>
                    <p>{content.ans.intro}</p>
                    <ul>
                      {content.ans.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
