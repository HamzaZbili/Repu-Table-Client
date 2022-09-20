import React, { useState } from "react";
import service from "../../services/apiHandler";

const ReputableModeratorForm = ({ eatery }) => {
  const [formData, setFormData] = useState({
    moderatorNotes: "",
    applicationOutcome: "",
  });
  const [error, setError] = useState(null);

  function refreshPage() {
    window.location.reload(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await service.patch(`/mod/eateries/${eatery._id}`, formData);
      refreshPage();
    } catch (error) {
      setError(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="moderatorNotes"
        name="moderatorNotes"
        value={formData.moderatorNotes}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
      />
      <select
        name="applicationOutcome"
        id="applicationOutcome"
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
      >
        <option value="">select application outcome</option>
        <option value="repu-table">accept</option>
        <option value="review">send for review</option>
        <option value="false">reject</option>
      </select>
      <input type="submit" value="send outcome" />
    </form>
  );
};

export default ReputableModeratorForm;
