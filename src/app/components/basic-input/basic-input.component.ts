import { Component, Input, OnInit } from "@angular/core";
import { BasicInput } from "../models/basic-input";

@Component({
  selector: "app-basic-input",
  templateUrl: "./basic-input.component.html",
  styleUrls: ["./basic-input.component.scss"]
})
export class BasicInputComponent implements OnInit {
  @Input() inputData: BasicInput;

  ngOnInit(): void {}
}
