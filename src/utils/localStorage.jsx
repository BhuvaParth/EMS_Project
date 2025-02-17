const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "taskCount": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "title": "Code Review",
        "description": "Review the latest code changes and provide feedback.",
        "date": "2025-02-18",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Write Documentation",
        "description": "Update the API documentation with the latest changes.",
        "date": "2025-02-19",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Fix Bugs",
        "description": "Resolve the reported issues in the bug tracker.",
        "date": "2025-02-20",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
  },
  {
    "id": 2,
    "firstName": "Rahul",
    "email": "employee2@example.com",
    "password": "123",
    "taskCount": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "title": "Client Follow-Up",
        "description": "Call clients and follow up on pending requests.",
        "date": "2025-02-18",
        "category": "Customer Support",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Prepare Sales Report",
        "description": "Compile the monthly sales data for review.",
        "date": "2025-02-19",
        "category": "Sales",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Lead Generation",
        "description": "Identify potential clients and add them to CRM.",
        "date": "2025-02-20",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
  },
  {
    "id": 3,
    "firstName": "Priya",
    "email": "employee3@example.com",
    "password": "123",
    "taskCount": { "active": 1, "newTask": 0, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "title": "Database Optimization",
        "description": "Improve the performance of the database queries.",
        "date": "2025-02-18",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update Security Policies",
        "description": "Revise and enhance internal security measures.",
        "date": "2025-02-19",
        "category": "Security",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
  },
  {
    "id": 4,
    "firstName": "Neha",
    "email": "employee4@example.com",
    "password": "123",
    "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "title": "Product Testing",
        "description": "Perform thorough testing on the new product release.",
        "date": "2025-02-18",
        "category": "Quality Assurance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Write Test Cases",
        "description": "Document test scenarios for automation.",
        "date": "2025-02-19",
        "category": "Quality Assurance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
  },
  {
    "id": 5,
    "firstName": "Sanya",
    "email": "employee5@example.com",
    "password": "123",
    "taskCount": { "active": 1, "newTask": 0, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "title": "Social Media Strategy",
        "description": "Plan the next quarter's social media campaigns.",
        "date": "2025-02-18",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Content Creation",
        "description": "Develop blog posts and social media content.",
        "date": "2025-02-19",
        "category": "Content Writing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
  }
];

const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}]

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employees, admin };
}