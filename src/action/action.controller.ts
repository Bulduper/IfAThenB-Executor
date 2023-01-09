import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ExecutorService } from 'src/executor/executor.service';

@Controller()
export class ActionController {
  constructor(private executorSvc: ExecutorService) {}
  @EventPattern('execute_action')
  async executeAction(actionData: any) {
    console.log(actionData);
    try {
      this.executorSvc.executeAction(actionData).catch(err =>{
        console.error('1Error executing action!', err);
      });
    } catch (err) {
      console.error('2Error executing action!', err);
    }
  }
}
