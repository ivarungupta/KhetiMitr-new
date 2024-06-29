## Step-by-Step Guide

### Open VSCode and Navigate to Your Project:

1. Launch Visual Studio Code (VSCode).
2. Open the folder where your `main.py` file and other project files are located.

### Open Terminal in VSCode:

- Press `Ctrl+`` (backtick) to open the integrated terminal in VSCode. This terminal will be used for running commands.

### Set Up a Virtual Environment:

1. Navigate to your project directory in the terminal:
   ```sh
   cd path/to/your/project
   ```
2. Create a virtual environment named venv :
   ```sh
   python -m venv venv
   ```
3. Activate the virtual environment:
    ```sh
    .\venv\Scripts\activate

### Install Required Packages:

Install TensorFlow, Streamlit, and other dependencies listed in your `main.py`:

```sh
pip install tensorflow streamlit numpy
```

### Run the Streamlit Application:

Once installation is complete, start the Streamlit server:

```sh
streamlit run main.py
```


### Steps to Run the Project Again

1. **Open VSCode and Navigate to Your Project:**
   - Launch Visual Studio Code (VSCode).
   - Open the folder where your `main.py` file and other project files are located.

2. **Open Terminal in VSCode:**
   - Press `Ctrl+`` (backtick) to open the integrated terminal in VSCode. This terminal will be used for running commands.

3. **Activate the Virtual Environment:**
   - Navigate to your project directory in the terminal:
     ```sh
     cd path/to/your/project
     ```
   - Activate the virtual environment (`venv`) you created earlier:
     - **On Windows:**
       ```sh
       .\venv\Scripts\activate
       ```
     - **On macOS/Linux:**
       ```sh
       source venv/bin/activate
       ```

4. **Run the Streamlit Application:**
   - Once the virtual environment is activated, start the Streamlit server:
     ```sh
     streamlit run main.py
     ```
   - This command will initialize the Streamlit server locally and open a new tab in your default web browser displaying your application.

5. **Navigate the Application:**
   - In your web browser, you should see the application running with a sidebar offering different options (`Home`, `About`, `Disease Recognition`).
   - Upload an image on the `Disease Recognition` page to test your model's prediction.

