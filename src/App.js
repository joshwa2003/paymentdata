import { useEffect, useState } from "react";
import { db } from "./indexfb"
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import HistoryTable from "./HistoryTable";
import PaymentForm from "./PaymentForm";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState([]);


  const onSubmit = async (e) => {
    e.preventDefault();

    const today = new Date()
    const f = new Intl.DateTimeFormat("es-sp", {
      dateStyle: "short",
      // timeStyle: "short"
    })
    const date = f.format(today)

    const data = { name, email, phone, amount, date }
    await addDoc(collection(db, 'details'), data);
    setName("");
    setEmail("");
    setPhone("");
    setAmount("");
    getDetails();
  };

  const getDetails = async () => {
    const q = query(collection(db, 'details'));
    const querySnapshot = await getDocs(q);
    let details = []
    querySnapshot.forEach((doc) => {
      details.push({ ...doc.data(), id: doc.id })
    })
    setDetails(details);
  }
  useEffect(() => {
    getDetails();
  }, []);

  return (

    <div className="App">
      <div className="form">
        <h1>Payment Details</h1>
        <PaymentForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          amount={amount}
          setAmount={setAmount}
          onSubmit={onSubmit}
        />
      </div>
      <div className="history">
        <h1>All Payment History</h1>
        <HistoryTable
          details={details}
        />
      </div>

    </div>
  );
}

export default App;
