# Vignelli Resume

A modern resume generator inspired by Massimo Vignelli's design principles.

## Routes

### Resume Routes

- **List Resumes**
  - **Endpoint**: `/resume`
  - **Method**: `GET`
  - **Description**: Retrieves a list of available resumes.

- **Get Resume by ID**
  - **Endpoint**: `/resume/[id]`
  - **Method**: `GET`
  - **Description**: Retrieves the details of a specific resume by ID.
  - **Parameters**:
    - `id`: The unique identifier for the resume.

## Getting Started

To get started with the project, ensure you have Node.js and npm installed. Use the following commands to set up the project:

```bash
nvm use
npm install
npm run dev
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.