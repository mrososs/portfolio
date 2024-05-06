import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  pdfPath = '../../../assets/Mohamed Osama Resume.pdf';
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}
  downloadResume() {
    // Download resume logic
    const link = document.createElement('a');
    link.href = this.pdfPath;
    link.target = '_blank';
    link.download = 'Mohamed Osama Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
