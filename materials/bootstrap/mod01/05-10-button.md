# Bootstrap JavaScript plugins: Button

Bootstrap provides additional features to enhance the functionality of form inputs like toggle switches, checkboxes, and radio buttons.

### Toggle Switches
Bootstrap provides a simple and elegant way to create toggle switches using the "custom-switch" class. This class is applied to the input element to create the toggle switch.

### Checkboxes
Bootstrap also provides various styles for checkboxes that can be easily customized to match your design requirements. Bootstrap includes classes like "form-check" and "form-check-input" to create checkboxes.

### Radio Buttons
Bootstrap provides radio buttons with different styles and sizes. You can use the "form-check" and "form-check-input" classes to create radio buttons in Bootstrap.

An example of using these additional features in a form:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Bootstrap Form Example</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>
  <div class="container mt-5">
    <form>
      <div class="form-group">
        <label for="toggleSwitch">Toggle Switch</label>
        <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" id="toggleSwitch">
          <label class="custom-control-label" for="toggleSwitch">On/Off</label>
        </div>
      </div>
      <div class="form-group">
        <label for="checkbox">Checkbox</label>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="checkbox">
          <label class="form-check-label" for="checkbox">Checkbox label</label>
        </div>
      </div>
      <div class="form-group">
        <label>Radio Buttons</label>
        <div class="form-check">
          <input type="radio" class="form-check-input" name="radioButton" id="radioButton1" value="option1">
          <label class="form-check-label" for="radioButton1">Option 1</label>
        </div>
        <div class="form-check">
          <input type="radio" class="form-check-input" name="radioButton" id="radioButton2" value="option2">
          <label class="form-check-label" for="radioButton2">Option 2</label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  <!-- Bootstrap JS and jQuery -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>
</html>
```

This code example includes a toggle switch, checkbox, and radio buttons that are styled using Bootstrap classes. Note that you may need to modify the classes or IDs used in this example to fit your own design requirements.

