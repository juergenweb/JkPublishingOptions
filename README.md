# JKPublishingOptions
ProcessWire module to publish and unpublish pages depending on dates
(Status is Beta - so should be tested carefully!!)

This module is inspired by the SchedulePages module, but the code is completely rewritten. However, it differs from the other module in a few ways.
* Publish from and publish until date inputs will be surrounded by a fieldset
* Includes more LazyCron time intervals
* You can add/remove publishing fields from specific templates from the module configuration - no need to add/remove them manually from templates
* Uninstall checkbox is disabled until publishing fields are removed from all templates 

## Module configuration fields
![alt text](https://raw.githubusercontent.com/juergenweb/JKPublishingOptions/main/configuration.jpg)

As you can see, you have a select input with all LazyCron time intervals - default is 1 hour.
Afterwards is a list of checkboxes. Each checkbox represents a frontend template where you can add the publishing fields.
If the checkbox of a certain template is checked, then the publishing fields will be added automatically after saving the module configuration.
On the opposite, the publishing fields will be removed from all templates where the checkbox is unchecked.
So there is no longer the need to add or remove the publishing fields manually to each template.

As mentioned above the uninstall checkbox will be disabled if one or more templates contain publishing fields.

![alt text](https://raw.githubusercontent.com/juergenweb/JKPublishingOptions/main/disabled.jpg)


## Template view
![alt text](https://raw.githubusercontent.com/juergenweb/JKPublishingOptions/main/form.jpg)

As you can see the inputs are side by side inside a fieldset.

## Usage
Entering values inside the 2 date fields is optional.

* No values means that the page will be visible after publishing without restrictions.
* If you enter only a publish from date means that the page will be visible from this date on and has no enddate.
* If you enter only a publish until date means that the page will be visible immidiately after publishing til the end date.
* Entering both, start and end date means that the page is visible in the time range in between.

So this module publishes or unpublishes a page according to the dates you have set.

If you want to change the labels of the input fields or the title of the fieldset, please go to the fields configuration page and make your changes there. 

## How to install

1. Download and place the module folder named "JKPublishingOptions" in:
/site/modules/

2. In the admin control panel, go to Modules. At the bottom of the
screen, click the "Check for New Modules" button.

3. Now scroll to the PublishingOptions module and click "Install". The required inputfields and the fieldset will be created automatically.

4. Choose the templates where you want to add the publishing fields by checking the appropriate checkboxes in the module configuration and click the save button.

## How to uninstall

1. Go to the module configuration

2. Uncheck all checkboxes to remove the publishing fields from all templates
 
3. Click the save button
  
4. Now lets check the uninstall checkbox in the module configuration and click the save button once more

5. All fields will be deleted and the module will be uninstalled
