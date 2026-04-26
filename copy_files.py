import os

ROOT_DIR = "."
OUTPUT_DIR = "content"

EXCLUDED_DIRS = {
    "data",
    "out",
    "node_modules",
    ".git",
    ".venv",
    "__pycache__",
    "dist",
    "build",
    OUTPUT_DIR
}


def ensure_output_dir():
    os.makedirs(OUTPUT_DIR, exist_ok=True)


def copy_folder_to_txt(folder_path: str, output_file: str):
    """
    Copy all text files inside a folder (recursively)
    into a single output txt file.
    """
    with open(output_file, "w", encoding="utf-8") as out:
        for root, dirs, files in os.walk(folder_path):
            # Exclude unwanted directories at ANY depth
            dirs[:] = [d for d in dirs if d not in EXCLUDED_DIRS]

            for file in files:
                file_path = os.path.join(root, file)
                relative_path = os.path.relpath(file_path, folder_path)

                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()

                    out.write(f"--- FILE: {relative_path} ---\n\n")
                    out.write(content)
                    out.write("\n\n" + "=" * 80 + "\n\n")

                except UnicodeDecodeError:
                    # Skip binary files silently
                    continue
                except Exception as e:
                    out.write(
                        f"--- FILE: {relative_path} (ERROR: {e}) ---\n\n"
                    )


def main():
    ensure_output_dir()

    for item in os.listdir(ROOT_DIR):
        item_path = os.path.join(ROOT_DIR, item)

        # ✅ Only root-level folders
        if os.path.isdir(item_path) and item not in EXCLUDED_DIRS:
            output_file = os.path.join(
                OUTPUT_DIR, f"{item}_contents.txt"
            )

            copy_folder_to_txt(item_path, output_file)
            print(f"✅ {item}/ → {output_file}")


if __name__ == "__main__":
    main()
