FROM tiangolo/uvicorn-gunicorn:python3.8-alpine3.10
RUN mkdir -p /app
COPY requirements.txt /app
RUN pip install --no-cache-dir -r requirements.txt
COPY . /app
ENTRYPOINT ["/start-reload.sh"]