const header = () => {
    return(
        <main>
            <form class="product-form" action='/admin/add-product' method="POST">
                <div class="form-control">
                    <h1>Title</h1>
                    <label for='title'></label>
                    <input type='text' name='title' id="title" placeholder='Type the title...'/>
                    <h3>Content</h3>
                    <label for='title'></label>
                    <textarea type='text' name='content' placeholder='Type the content...' id='content'></textarea>
                </div>
                <button class="btn" type='submit'>Add product</button>
            </form>
        </main>
    );
}

export default header;