import {processData} from "./processData";
import {retrieveData} from "./retrieveData";
import {logData} from "./logging";

const url = "http://searchapi.fie.future.net.uk/widget.php?id=review&site=TRD&model_name=iPad";

const data = retrieveData(url);
const processedData = processData(data);
logData(processedData);