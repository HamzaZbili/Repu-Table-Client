import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/apiHandler";

const ReputableModeratorForm = ({ eatery, updatePendingApplications }) => {
  const [formData, setFormData] = useState({
    moderatorNotes: "",
    applicationOutcome: "",
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await service.patch(`/mod/eateries/${eatery._id}`, formData);
      updatePendingApplications();
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
        required
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
