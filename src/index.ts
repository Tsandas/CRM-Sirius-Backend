import app from "./server";
import { getEnvVar } from "./utils/getEnvVar";

app.listen(getEnvVar("SERVER_PORT"), () => {
  console.log(`Server is running on port ${getEnvVar("SERVER_PORT")}`);
});
