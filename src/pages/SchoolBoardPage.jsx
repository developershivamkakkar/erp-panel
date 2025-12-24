import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createSchoolSession,
  deleteSchoolSession,
  fetchSchoolSessions,
  updateSchoolSession,
} from "../api/tenant/schoolSessionApi";
import styles from "./styles/SchoolSession.module.css";
import Loader from "../components/Loader";
import { FaSchool } from "react-icons/fa6";
import { FaEdit, FaListUl } from "react-icons/fa";
import { MdDelete, MdError } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { toast } from "react-toastify";
import SchoolSessionModal from "../components/SchoolSessionModal";

function SchoolSessionPage() {
  // Controls whether the modal is visible.
  const [showModal, setShowModal] = useState(false);

  //  Holds the session being edited.
  // null means create mode
  // Object means edit mode
  const [editData, setEditData] = useState(null);

  //Retrieves the already-existing QueryClient from React context

  //Does not create a new instance

  //Does not duplicate anything

  const queryClient = useQueryClient();

  const handleCreate = () => {
    setEditData(null);
    setShowModal(true);
  };

  const handleEdit = (session) => {
    setEditData(session);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setEditData(null);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this session? This action cannot be undone."
    );

    if (confirmed) {
      deleteMutation.mutate(id);
    }
  };

  // Fetch sessions
  const { data, isLoading, isError } = useQuery({
    queryKey: ["school-sessions"],
    queryFn: fetchSchoolSessions,
    onError: (err) => {
      toast.error(err?.message || "Failed to fetch sessions");
    },
  });

  // Create mutation
  const createMutation = useMutation({
    mutationFn: createSchoolSession,
    onSuccess: () => {
      toast.success("Session created successfully");
      queryClient.invalidateQueries(["school-sessions"]);
      // Without useQueryClient() your component: Can read data (useQuery), Can write data (useMutation), But cannot manually refresh or modify cached data
      handleClose();
    },
    onError: (err) => {
      toast.error(err?.message || "Failed to create session");
    },
  });

  //Update Session Mutation
  const updateMutation = useMutation({
    mutationFn: updateSchoolSession,
    onSuccess: () => {
      toast.success("Session updated");
      queryClient.invalidateQueries(["school-sessions"]);
      handleClose();
    },
  });

  // Delete Session Mutation
  const deleteMutation = useMutation({
    mutationFn: deleteSchoolSession,
    onSuccess: () => {
      toast.success("Session deleted Successfully");
      queryClient.invalidateQueries(["school-sessions"]);
    },
    onError: () => {
      toast.error("Failed to delete a Session");
    },
  });

  // If data.data exists → use it

  // Else if data exists → use it

  // Else → empty array

  const sessions = data?.data ?? data ?? [];

  if (isLoading) return <Loader />;

  return (
    <div className={`content-wrapper ${styles["session-container"]}`}>
      {/* Header */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>
                <FaSchool /> Manage Boards
              </h1>
            </div>

            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">School Boards</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header d-flex align-items-center">
              <h3 className="card-title">
                <FaListUl /> Boards List
              </h3>

              <button
                className={`btn btn-sm ms-auto ${styles["createSessionBtn"]}`}
                onClick={handleCreate}
              >
                <IoIosCreate /> Create Board
              </button>
            </div>

            <div className="card-body table-responsive p-0">
              <table
                className={`table table-hover text-nowrap ${styles["session-table"]}`}
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Code</th>
                    <th>Board Name</th>
                    <th>Board Type</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {sessions.length > 0 ? (
                    sessions.map((item, index) => (
                      <tr key={item.id ?? index}>
                        <td>{index + 1}</td>
                        <td>{item?.name || "N/A"}</td>
                        <td>
                          {item?.start_date
                            ? item.start_date.split("T")[0]
                            : "N/A"}
                        </td>

                        <td>
                          {item?.end_date ? item.end_date.split("T")[0] : "N/A"}
                        </td>
                        <td>
                          <span
                            className={`badge bg-${
                              Number(item?.is_active) === 1
                                ? "success"
                                : "danger"
                            }`}
                          >
                            {Number(item?.is_active) === 1
                              ? "Active"
                              : "Inactive"}
                          </span>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-warning me-1"
                            onClick={() => handleEdit(item)}
                          >
                            <FaEdit />
                          </button>

                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(item.id)}
                            disabled={deleteMutation.isLoading}
                          >
                            <MdDelete />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center py-3">
                        {isError ? (
                          <>
                            <MdError className="text-danger me-1" />
                            Error loading sessions.
                          </>
                        ) : (
                          "No sessions available."
                        )}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ MODAL RENDERED ONCE */}
      <SchoolSessionModal
        show={showModal}
        onHide={handleClose}
        editData={editData}
        createMutation={createMutation}
        updateMutation={updateMutation}
      />
    </div>
  );
}

export default SchoolSessionPage;
