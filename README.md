# Secure File Upload System

A **Secure File Upload System** built using **Go** (Golang) for the backend and a simple HTML frontend. This system enables secure file uploads while performing various malware scanning checks to ensure uploaded files do not pose a security threat.

## Features

- **Secure File Upload**: Only allows specific file types (images, PDFs, etc.).
- **Malware Detection**: Uses traditional malware scanning tools like ClamAV and integrates machine learning to detect malicious files.
- **File Size and Type Validation**: Limits upload size and enforces file type restrictions.
- **Secure Storage**: Files are securely stored with encrypted access.

## Table of Contents

1. [Installation](#installation)
2. [Execution](#execution)
3. [Usage](#usage)
4. [Dependencies](#dependencies)
5. [Contributing](#contributing)
6. [License](#license)

## Installation

### Prerequisites

Before you can run the project, make sure you have the following installed:

- [Go](https://golang.org/doc/install) (Version 1.16 or above)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node.js](https://nodejs.org/) (If you're using a frontend framework like React)

### Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/Karthikkkunal/Secure-File-Upload-System.git
cd Secure-File-Upload-System
