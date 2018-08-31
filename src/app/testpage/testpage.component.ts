import { SharedService, SelectionDialogOptions } from '../shared.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { ThemePalette } from '@angular/material/core';
import { DomSanitizer } from '@angular/platform-browser';

type TestButtonType = 'normal' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab' | 'raised';
interface TestButton {
  color?: ThemePalette;
  title?: string;
  tooltip?: string;
  btnType?: TestButtonType;
  icon?: string;
}
interface TestDialog {
  dialogType?: 'alert' | 'confirm' | 'prompt' | 'selection';
  title?: string;
  message?: string;
  okBtn?: string;
  cancelBtn?: string;
  placeholder?: string;
  value?: string | number | any;
}
interface TestSnackBar {
  duration?: number;
  action?: string;
  verticalPosition?: MatSnackBarVerticalPosition;
  horizontalPosition?: MatSnackBarHorizontalPosition;
  panelClass?: string[] | string;
  snackBarMsg?: string;
}
@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html'
})
export class TestpageComponent implements OnInit {
  buttons: TestButton[] = [];
  dialogTypes = ['alert', 'confirm', 'prompt', 'selection'];
  dialog: TestDialog = {};
  snackbar: TestSnackBar = {};
  verticalPos = ['top', 'bottom'];
  horizontalPos = ['start', 'center', 'end', 'left', 'right'];
  constructor(
    private shared: SharedService,
    private dom: DomSanitizer
  ) {
    shared.title = 'Test page';
  }
  /**
   * Sets the default value
   * @param varToSet The variable to set
   * @param defaultVal Default variable
   */
  private setDefaultValue(varToSet: any, defaultVal: any): any {
    return varToSet ? varToSet : defaultVal;
  }
  ngOnInit() {
    this.dialog.dialogType = 'alert';
    this.buttons = [
      {
        color: 'primary',
        title: 'Button',
        btnType: 'normal'
      },
      {
        color: 'accent',
        title: 'Accent!',
        btnType: 'raised'
      },
      {
        color: 'warn',
        title: 'Flat button',
        btnType: 'flat'
      },
      {
        color: 'primary',
        btnType: 'icon',
        icon: 'done_all',
        tooltip: 'Mark all as done'
      },
      {
        btnType: 'fab',
        icon: 'add'
      },
      {
        color: 'warn',
        btnType: 'mini-fab',
        icon: 'close',
        tooltip: 'Close'
      }
    ];
  }
  /**
   * Generates lorem ipsum text
   * @param isSnackBar Whether to generate lorem ipsum for the snackbar message
   */
  generateLoremIpsum(isSnackBar?: boolean) {
    // tslint:disable-next-line:max-line-length
    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis, libero ac euismod blandit, orci lacus maximus nibh, in iaculis elit elit non magna. Vestibulum elit ante, cursus eu ligula eu, elementum ullamcorper ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisis tortor id ante blandit ultrices. Nullam consequat ullamcorper dolor, nec euismod nisl egestas in. Maecenas rutrum a neque a sollicitudin. Sed eleifend ex purus, eu placerat enim varius sed. Integer venenatis, enim eget gravida dictum, justo erat porttitor dui, ac ultricies erat turpis at lacus. Morbi molestie consequat mi a maximus. Vivamus placerat mollis nisl, eu posuere nisi blandit eu. In iaculis, nisl vel tempor accumsan, dolor odio maximus est, nec tempus erat lorem at arcu. In cursus mi et mi ullamcorper, sed pharetra velit placerat. Praesent et nulla condimentum, dignissim diam vel, dictum nulla. Quisque vel risus eu sapien lobortis rhoncus vitae ac quam. Cras diam leo, sagittis molestie augue sit amet, porttitor aliquam justo.';
    if (isSnackBar) {
      this.snackbar.snackBarMsg = loremIpsum;
    } else {
      this.dialog.message = loremIpsum;
    }
  }
  openDialog() {
    switch (this.dialog.dialogType) {
      case 'alert':
        this.alertDialog();
        break;
      case 'confirm':
        this.confirmDialog();
        break;
      case 'prompt':
        this.promptDialog();
        break;
      case 'selection':
        this.selectionDialog();
        break;
      default:
        this.alertDialog();
        break;
    }
  }
  alertDialog() {
    this.shared.openAlertDialog({
      title: this.setDefaultValue(this.dialog.title, 'Alert'),
      msg: this.setDefaultValue(this.dialog.message, 'I\'m an alert message made with code!'),
      ok: this.setDefaultValue(this.dialog.okBtn, 'OK')
    });
    this.clearOptions(this.dialog);
  }
  confirmDialog() {
    this.shared.openConfirmDialog({
      title: this.setDefaultValue(this.dialog.title, 'Confirmation'),
      msg: this.setDefaultValue(this.dialog.message, 'I\'m a confirm message made with code!'),
      cancel: this.setDefaultValue(this.dialog.cancelBtn, 'Cancel'),
      ok: this.dialog.okBtn ? this.dialog.okBtn : 'OK'
    }).afterClosed().subscribe((result) => {
      this.outputResult(result);
    });
    this.clearOptions(this.dialog);
  }
  promptDialog() {
    this.shared.openPromptDialog({
      title: this.setDefaultValue(this.dialog.title, 'Prompt'),
      msg: this.setDefaultValue(this.dialog.message, 'Enter your name:'),
      cancel: this.setDefaultValue(this.dialog.cancelBtn, 'Cancel'),
      ok: this.setDefaultValue(this.dialog.okBtn, 'OK'),
      inputType: 'text',
      placeholder: this.setDefaultValue(this.dialog.placeholder, 'Name'),
      value: this.setDefaultValue(this.dialog.value, null)
    }).afterClosed().subscribe((result) => {
      this.outputResult(result);
    });
    this.clearOptions(this.dialog);
  }
  selectionDialog() {
    const selectionDialogOptions: SelectionDialogOptions[] = [];
    // for (let i = 0; i < 10; i++) {
    //   if (i === 1) {
    //     tempVar.push({ content: 'Item 1', disabled: true, value: 'item-1' });
    //   } else if (i === 8) {
    //     tempVar.push({ content: 'Item 8', value: 'item-8', selected: true });
    //   } else {
    //     tempVar.push({ content: `Item ${i}`, value: `item-${i}` });
    //   }
    // }
    selectionDialogOptions.push({ content: 'Critical alerts', value: 'critical_alerts', selected: true, disabled: true });
    selectionDialogOptions.push({ content: 'Weekly summary', value: 'weekly_summary' });
    selectionDialogOptions.push({ content: 'New features', value: 'new_features' });
    selectionDialogOptions.push({ content: 'Uncategorised', value: 'uncategorised', selected: true, disabled: true });
    const dialogRef = this.shared.openSelectionDialog({
      title: this.setDefaultValue(this.dialog.title, 'Notification preferences'),
      msg: this.setDefaultValue(this.dialog.message, 'Show preferences for the following'),
      ok: this.setDefaultValue(this.dialog.okBtn, 'Save'),
      cancel: this.setDefaultValue(this.dialog.cancelBtn, 'Cancel'),
      options: selectionDialogOptions
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.outputResult(JSON.stringify(result));
    });
    this.clearOptions(this.dialog);
  }
  /**
   * Outputs the result of a function
   * @param result The result of a function
   * @private
   */
  private outputResult(result: any) {
    console.log(`Result: ${result}`);
    document.getElementById('result').innerText = `Result: ${result}`;
  }
  /**
   * Resets a value to an undefined {@link Object}
   * @param opts The options to clear
   */
  private clearOptions(opts: TestDialog | TestSnackBar | any) {
    opts = {};
  }
  /**
   * Closes the current snackbar
   */
  closeSnackBar() {
    this.shared.closeSnackBar();
  }
  /**
   * Opens a snackbar
   */
  snackBar() {
    this.shared.openSnackBar({
      msg: this.setDefaultValue(this.snackbar.snackBarMsg, 'I\'m a snackbar!'),
      additionalOpts: {
        horizontalPosition: this.snackbar.horizontalPosition,
        verticalPosition: this.snackbar.verticalPosition,
        panelClass: this.snackbar.panelClass
      }
    });
    this.clearOptions(this.snackbar);
  }
  /**
   * Opens an error snackbar
   */
  errorSnackBar() {
    this.shared.openSnackBar({
      msg: this.setDefaultValue(this.snackbar.snackBarMsg, 'Error: Something happened'),
      additionalOpts: {
        duration: 5000
      }
    });
  }
  /**
   * Opens a snackbar with a duration
   */
  durationSnackBar() {
    this.shared.openSnackBar({
      msg: this.setDefaultValue(this.snackbar.snackBarMsg, 'I\'m a duration snackbar!'),
      additionalOpts: {
        duration: this.snackbar.duration ? this.snackbar.duration : 5000,
        horizontalPosition: this.snackbar.horizontalPosition,
        verticalPosition: this.snackbar.verticalPosition,
        panelClass: this.snackbar.panelClass
      }
    });
    this.clearOptions(this.snackbar);
  }
  /**
   * Opens a snackbar with a result
   */
  snackBarWithResult() {
    const snackBarRef = this.shared.openSnackBar({
      msg: this.setDefaultValue(this.snackbar.snackBarMsg, 'I\'m a snackbar with an action!'),
      action: this.snackbar.action,
      additionalOpts:
      {
        horizontalPosition: this.snackbar.horizontalPosition,
        verticalPosition: this.snackbar.verticalPosition,
        panelClass: this.snackbar.panelClass
      }
    });
    snackBarRef.onAction().subscribe(() => {
      this.shared.openAlertDialog({ msg: `You clicked on the "${this.snackbar.action}" button.` });
    });
    this.clearOptions(this.snackbar);
  }
}
