import { ProgrammingLanguage } from "./ProgrammingLanguage";
import { Developer } from "./developer";
import { Company } from "./company";

// Create Programming Language
const Java = new ProgrammingLanguage("1", "Java", "OOP");
const JavaScript = new ProgrammingLanguage("2", "JavaScript", "Multi-Paradigm");
const python = new ProgrammingLanguage("3", "python", "Scripting Paradigm");
const PHP = new ProgrammingLanguage("4", "php", "OOP");

// Create Developer
const dev1 = new Developer("1", "mgmg", Java);
const dev2 = new Developer("2", "noe", JavaScript);
const dev3 = new Developer("3", "joe", PHP);
const dev4 = new Developer("4", "smith", python);
const dev5 = new Developer("5", "kat", Java);

// create company
const company1 = new Company("1", "Apple", [dev1, dev2, dev3]);
const company2 = new Company("2", "Google", [dev3, dev4, dev5]);
const company3 = new Company("3", "Adobe", [dev1, dev4, dev3, dev5]);
const company4 = new Company("4", "Netflix", [dev1, dev3]);

// information
company1.displayInfo();
company1.displayEmployees();
dev1.displayFavLang();
