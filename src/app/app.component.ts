import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'select-table';
  isDropdownOpen = false;
  selectedOption: string = ''
  options = ['Option 1', 'Option 2', 'Option 3'];

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.elementRef.nativeElement.contains(e.target)) {
        this.isDropdownOpen = false;
      }
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  ngAfterViewInit(): void {
    let body = document.body
    // body.onclick(this.toggleDropdown)
  }

  clearSelection(event: MouseEvent) {
    event.stopPropagation();
    this.selectedOption = '';
  }

  selectOption(option: string) {
    console.log('Selected option:', option);
    this.selectedOption = option
    this.isDropdownOpen = false;
  }

  ngOnDestroy() {
    this.renderer.destroy();
  }
}
