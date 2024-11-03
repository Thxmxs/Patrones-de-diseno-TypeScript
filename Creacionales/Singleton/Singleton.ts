class Logger{
    private static instance: Logger;
    private logs: string[] = [];

    private constructor(){};

    public static getInstance(): Logger{
        if(!Logger.instance){
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public setLog(message: string): void{
        const timeStamp = new Date().toISOString();
        this.logs.push(`${timeStamp} ${message}`);
    }

    public getLogs(): string[]{
        return this.logs;
    }
}

const logger = Logger.getInstance();
logger.setLog('Inicializando sistema de logs');

logger.getLogs();