import { useState } from "react";
import "./App.css";
import { GiveRev } from "./Component/GiveRev";
import { Reviews } from "./Component/Review";

function App() {
  const [reviewFormData, setReviewFormData] = useState([]);
  return (
    <div>
      <GiveRev setReviewFormData={setReviewFormData} />

      <Reviews
        reviewFormData={reviewFormData}
        setReviewFormData={setReviewFormData}
      />
    </div>
  );
}

export default App;
