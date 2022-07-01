<template>
    <div class="pagination-wrap">
        <img
            src="../assets/prev_arrow.svg"
            alt=""
            class="arrow prev-btn"
            @click="
                () => {
                    if (pageId > 1) changePage(pageId - 1);
                }
            "
        />
        <div class="page-button-wrap">
            <template v-for="i in Math.min(pageCount, 5)" :key="i">
                <div
                    class="page-btn"
                    :class="{ 'current-page': pageStart + i === pageId }"
                    @click="changePage(pageStart + i)"
                >
                    {{ pageStart + i }}
                </div>
            </template>
        </div>
        <img
            src="../assets/next_arrow.svg"
            alt=""
            class="arrow next-btn"
            @click="
                () => {
                    if (pageId < pageCount)
                        changePage(pageId + 1);
                }
            "
        />
    </div>
</template>

<script>
export default {
    name: "Pagination",
    data() {
        return {};
    },
    props: {
        pageCount: Number,
    },
    computed: {
        pageId: function () {
            return parseInt(this.$route.query.page) || 1;
        },
        pageStart: function () {
            return Math.max(
                Math.min(this.pageId - 3, this.pageCount - 5),
                0
            );
        },
    },
    methods: {
        changePage: async function (page) {
            await this.$router.push({
                name: this.$route.name,
                query: { ...this.$route.query, page },
            });
        },
    },
};
</script>

<style scoped>
.pagination-wrap {
    height: 32px;

    /* margin-top : 32px; */

    display: flex;
    justify-content: center;
}

.pagination-wrap img {
    width: 32px;

    padding: 8px;
}

.pagination-wrap .page-button-wrap {
    display: flex;
    gap: 4px;
}

.pagination-wrap .page-btn {
    width: 32px;

    color: #c9c9c9;


    font-size: 14px;
    font-weight: 500;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    user-select: none;
}

.pagination-wrap .page-btn:hover {
    background-color: var(--gray1);
}

.pagination-wrap .page-btn.current-page {
    color: white;

    background-color: var(--main-color4);
}

.pagination-wrap * {
    cursor: pointer;
}
</style>
