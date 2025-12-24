import { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation
const schema = yup.object({
  name: yup
    .string()
    .required("Session name is required")
    .matches(/^\d{4}-\d{2}$/, "Session format must be YYYY-YY (e.g. 2025-26)"),

  start_date: yup.date().required("Start date required"),

  end_date: yup
    .date()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .nullable()
    .min(yup.ref("start_date"), "End date cannot be before start date"),

});

function SchoolSessionModal({
  show,
  onHide,
  editData,
  createMutation,
  updateMutation,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      start_date: "",
      end_date: "",
    },
  });

  useEffect(() => {
    if (editData) {
      // EDIT MODE → preload values
      reset({
        name: editData.name || "",

        start_date: editData.start_date
          ? editData.start_date.split("T")[0]
          : "",

        end_date: editData.end_date ? editData.end_date.split("T")[0] : "",
      });
    } else {
      // CREATE MODE → clear form
      reset({
        name: "",
        start_date: "",
        end_date: "",
      });
    }
  }, [editData, reset]);

  const onSubmit = (data) => {
    if (editData) {
      updateMutation.mutate({ id: editData.id, ...data });
    } else {
      createMutation.mutate(data);
    }
  };

  const isLoading = createMutation.isLoading || updateMutation.isLoading;

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {editData ? "Edit Session" : "Create Session"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control {...register("name")} isInvalid={!!errors.name} />
            <Form.Control.Feedback type="invalid">
              {errors.name?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              {...register("start_date")}
              isInvalid={!!errors.start_date}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              {...register("end_date")}
              isInvalid={!!errors.end_date}
            />
          </Form.Group>

          <Button type="submit" disabled={isLoading} className="w-100">
            {editData
              ? isLoading
                ? "Updating..."
                : "Update"
              : isLoading
              ? "Creating..."
              : "Create"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SchoolSessionModal;
