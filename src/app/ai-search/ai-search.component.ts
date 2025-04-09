import { Component } from "@angular/core";
import { Message, ChatService } from "./chat.service";

@Component({
  selector: "ai-search",
  templateUrl: "./ai-search.component.html",
  styleUrls: ["./ai-search.component.css"],
  providers: [ChatService],
})
export class AiSearchComponent {
  messages: Message[] = [];
  value: string;

  constructor(public chatService: ChatService) {}

  ngOnInit() {
    this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }

  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = "";
  }
}
